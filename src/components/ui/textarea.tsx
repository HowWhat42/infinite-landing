import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <div className='border-input-field relative rounded-xl'>
      <textarea
        data-slot='textarea'
        className={cn(
          'bg-[#040A08]/50 blur-question text-white/70 h-[160px] text-lg rounded-xl',
          'placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full px-3 py-2 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Textarea }
