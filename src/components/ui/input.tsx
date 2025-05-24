import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className='border-input-field relative rounded-xl'>
      <input
        type={type}
        data-slot='input'
        className={cn(
          'bg-[#040A08]/50 blur-question text-white/70 text-lg rounded-xl',
          'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-12 w-full min-w-0 px-3 py-1 transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
