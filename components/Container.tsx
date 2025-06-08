import { ReactNode } from "react"


const Container = ({children}: {children:ReactNode}) => {
  return (
   <section className="max-w-[1290px] flex mx-auto items-center justify-center flex-col">
    {children}
   </section>
  )
}

export default Container
