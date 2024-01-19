import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

const OTP = () => {
    const [otp, setOtp] = useState("");
    const OTP_MAX_LENGTH = 4;
    const inputRefs = useRef([]);

    const handleInputChange = (index, event) => {
        const { value } = event.target;

        // Handle backspace
        if (value === "") {
            event.preventDefault(); // Prevent default behavior
            if (index > 0) {
                setOtp(otp.substring(0, index));
                inputRefs.current[index - 1].focus(); // Focus on previous input
            } else if (index === 0) {
                setOtp(otp.substring(0, index));
            }
            return;
        }

        // Handle digit input
        if (otp.length < OTP_MAX_LENGTH) {
            setOtp(otp.substring(0, index) + value + otp.substring(index + 1));
        }

        if (value.length === 1) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    useEffect(() => {
        if (otp.length === OTP_MAX_LENGTH) {
            console.log("OTP Inserted!!!");
        }
    }, [otp]);

    return (
        <div className="flex items-center justify-center gap-4 pb-6 pt-6">
            {Array.from({ length: OTP_MAX_LENGTH }, (_, i) => (
                <Input
                    key={i}
                    type="number"
                    ref={(el) => (inputRefs.current[i] = el)}
                    value={otp.charAt(i) || ""}
                    maxLength={1}
                    onChange={(e) => handleInputChange(i, e)}
                    className="w-10 h-12 bg-primary text-primary-foreground text-center ring-[3px] ring-border rounded-md focus:outline-none focus:ring-accent font-medium text-base"
                />
            ))}
        </div>
    );
};

export default OTP;
