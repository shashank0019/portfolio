import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-signal text-base-900 font-semibold hover:bg-signal-bright shadow-signal',
  ghost:
    'glass text-ink-100 hover:border-signal/40 hover:text-signal',
  link: 'text-ink-300 hover:text-signal',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  download,
  ...rest
}) {
  const classes = `inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-sm transition-all duration-200 ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && <Icon size={16} />}
      {children}
    </>
  )

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps} {...rest}>
      {content}
    </motion.button>
  )
}
