'use client';

import { Loader2, Send } from 'lucide-react';

interface RFQSubmitButtonProps {
  isSubmitting: boolean;
  hasService: boolean;
}

export function RFQSubmitButton({ isSubmitting, hasService }: RFQSubmitButtonProps) {
  const buttonClasses =
    'w-full py-4 px-6 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:pointer-events-none';

  return (
    <>
      {/* Desktop: inline */}
      <div className="hidden md:block space-y-3">
        <button
          type="submit"
          disabled={isSubmitting || !hasService}
          className={buttonClasses}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Request Detailed Quote</span>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground text-center">
          We&apos;ll respond within 48 business hours with a detailed quote and next steps.
        </p>
      </div>

      {/* Mobile: sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-t border-input px-4 py-3">
        <button
          type="submit"
          disabled={isSubmitting || !hasService}
          className={buttonClasses}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Request Quote</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </>
  );
}
