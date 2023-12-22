import TitleHeader from "../component/common/TitleHeader"
import TransformInput from "../component/transform/TransformInput"

const TransformReceipt = () => {
  return (
    <div className="w-full max-w-[30rem] h-full mx-auto">
      <TitleHeader title={"TRANSFORM RECEIPT"}/>
      <TransformInput/>
    </div>
  )
}

export default TransformReceipt
