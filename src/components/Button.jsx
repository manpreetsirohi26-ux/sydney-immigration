import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const baseStyles =
  'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-primary-navy text-white hover:bg-primary-dark focus:ring-primary-navy hover:shadow-lg hover:shadow-primary-navy/20',
  secondary:
    'bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-primary-navy focus:ring-white',
  outline:
    'bg-transparent text-primary-navy border-2 border-primary-navy hover:bg-primary-navy hover:text-white focus:ring-primary-navy',
  gold:
    'bg-gradient-to-r from-primary-gold to-primary-gold-light text-primary-navy shadow-gold hover:shadow-elevated hover:-translate-y-0.5 focus:ring-primary-gold',
  ghost: 'bg-transparent text-secondary-dark hover:bg-secondary-light focus:ring-gray-300',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-3.5 text-base gap-2',
  xl: 'px-10 py-5 text-xl gap-3',
};

function buttonClasses({ variant = 'primary', size = 'md', fullWidth = false, className = '' } = {}) {
  return `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${
    fullWidth ? 'w-full' : ''
  } ${className}`.trim();
}

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      to,
      href,
      ...props
    },
    ref
  ) => {
    const classes = buttonClasses({ variant, size, fullWidth, className });

    const content = isLoading ? (
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ) : (
      <>
        {leftIcon && <span className="flex-shrink-0 inline-flex">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0 inline-flex">{rightIcon}</span>}
      </>
    );

    if (to) {
      return (
        <motion.div whileTap={{ scale: 0.98 }} className="inline-flex">
          <Link ref={ref} to={to} className={classes} {...props}>
            {content}
          </Link>
        </motion.div>
      );
    }

    if (href) {
      return (
        <motion.a whileTap={{ scale: 0.98 }} ref={ref} href={href} className={classes} {...props}>
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...props}
        disabled={isLoading || props.disabled}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
