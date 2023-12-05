import "./style.css"
const BlobComponent = () => {
  return (
<div className="">
  <div className="blob-c min-h-screen overflow-hidden absolute w-full filter blur-40">
    <div className="shape-blob hero bg-blue-500 h-60 w-80 rounded-full opacity-70 absolute left-75 top-40 animate-transform animate-movement-one"></div>
    <div className="shape-blob one bg-blue-900 "></div>
    <div className="shape-blob six bg-blue-400 h-70 w-100 rounded-full absolute left-160 top-200 rotate-180 animate-transform animate-movement-two"></div>
    <div className="shape-blob four bg-blue-700 h-100 w-80 rounded-full absolute left-350 top-60 rotate-180 animate-transform animate-movement-two"></div>
    <div className="shape-blob five bg-blue-500 h-100 w-80 rounded-full absolute left-480 top-30 rotate-180 animate-transform animate-movement-two"></div>
    <div className="shape-blob two bg-blue-700 h-150 w-150 rounded-full absolute left-600 top-150 rotate-180 animate-transform animate-movement-two"></div>
    <div className="shape-blob three bg-blue-400 h-150 w-150 rounded-full absolute left-800 top-30 rotate-180 animate-transform animate-movement-two"></div>
  </div>

</div>
  )
}

export default BlobComponent