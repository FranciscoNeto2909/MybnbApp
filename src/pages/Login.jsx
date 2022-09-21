import Registration from "../components/login/Registration"
import NumberAuth from "../components/login/NumberAuth"
import { useState } from "react"
import CompleteRegistration from "../components/login/CompletesRegistration"
export default function Login() {
    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState("")
    const [code, setCode] = useState("")
    function handleNextStep() {
        if (step < 3) {
            setStep(step + 1)
        } else {
            setStep(1)
        }
    }
    function handleBackStep() {
        if (step > 0 && step < 3) {
            setStep(step - 1)
        } else {
            setStep(1)
        }
    }
    return (
        <>
            {step === 1 &&
                <Registration code={code} setCode={setCode} setPhone={setPhone} handleNextStep={handleNextStep} handleBackStep={handleBackStep}/>}
            {step === 2 && <NumberAuth phone={phone} code={code} handleNextStep={handleNextStep} handleBackStep={handleBackStep}/>}
            {step === 3 && <CompleteRegistration handleNextStep={handleNextStep} />}

        </>
    )
}