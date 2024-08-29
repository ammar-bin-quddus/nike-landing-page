import { star } from "../assets/icons"


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img 
        src={imgURL} 
        alt={customerName} 
        className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img 
            src={star}
            width={24}
            height={24}
            className="m-0 object-contain"
             />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-center text-3xl font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard