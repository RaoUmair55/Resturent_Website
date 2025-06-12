import { useState, useCallback } from 'react';
import { ERROR_MESSAGES } from '../utils/constants';

export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return ERROR_MESSAGES.required;
    }

    if (rules.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return ERROR_MESSAGES.email;
    }

    if (rules.phone && !/^\+?[\d\s-]{10,}$/i.test(value)) {
      return ERROR_MESSAGES.phone;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message || 'Invalid format';
    }

    return '';
  }, [validationRules]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }, [validateField]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, values[name]) }));
  }, [validateField, values]);

  const handleSubmit = useCallback(async (onSubmit) => {
    setIsSubmitting(true);
    const newErrors = {};
    let isValid = true;

    // Validate all fields
    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }

    setIsSubmitting(false);
  }, [validateField, validationRules, values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }, [validateField]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
  };
}; 