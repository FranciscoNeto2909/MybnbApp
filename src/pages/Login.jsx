import CodeSender from "../components/login/CodeSender"
import NumberAuth from "../components/login/EmailAuth"
import { useState } from "react"
import Register from "../components/login/Register"
export default function Login() {
    const [step, setStep] = useState(1)
    const [code, setCode] = useState("")

    const [userData, setUserData] = useState({
        name: "",
        email:"",
        lastName: "",
        phone: "",
        password: "",
        confirmPass: "",
        birthDate: "",
    })

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
                <CodeSender code={code} setCode={setCode} userData={userData} setUserData={setUserData} handleNextStep={handleNextStep} handleBackStep={handleBackStep}/>}
            {step === 2 && <NumberAuth userData={userData} code={code} handleNextStep={handleNextStep} handleBackStep={handleBackStep}/>}
            {step === 3 && <Register userData={userData} setUserData={setUserData} handleNextStep={handleNextStep} />}

        </>
    )
}