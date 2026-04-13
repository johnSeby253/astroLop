import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

export default function CustomModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  hideClass,
  hideHeader = false,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn("sm:max-w-md rounded-xl", className)}
      >
        {!hideHeader && (
          <DialogHeader>
            {title && <DialogTitle className={hideClass}>{title}</DialogTitle>}
            {description && (
              <DialogDescription className={hideClass}>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}
      </DialogContent>
    </Dialog>
  )
}