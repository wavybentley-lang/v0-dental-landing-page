"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
    ({ label, className, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false)
        const [hasValue, setHasValue] = React.useState(false)

        // Handle initial value
        React.useEffect(() => {
            setHasValue(!!props.value || !!props.defaultValue)
        }, [props.value, props.defaultValue])

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false)
            setHasValue(!!e.target.value)
            props.onBlur?.(e)
        }

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true)
            props.onFocus?.(e)
        }

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setHasValue(!!e.target.value)
            props.onChange?.(e)
        }

        const isActive = isFocused || hasValue

        return (
            <div className="relative w-full">
                <Input
                    {...props}
                    ref={ref}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={cn(
                        "h-14 pt-4 px-4 text-base md:text-sm transition-all duration-200",
                        isActive ? "border-[#C9A96E] ring-1 ring-[#C9A96E]/20" : "border-border",
                        className
                    )}
                    placeholder=""
                />
                <label
                    className={cn(
                        "absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground",
                        isActive
                            ? "-top-1 text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider bg-white px-1"
                            : "top-1/2 -translate-y-1/2 text-sm"
                    )}
                >
                    {label}
                </label>
            </div>
        )
    }
)
FloatingInput.displayName = "FloatingInput"

export { FloatingInput }
