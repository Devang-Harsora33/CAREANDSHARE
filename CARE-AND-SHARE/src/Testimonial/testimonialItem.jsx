import SubHead from "../Atoms/subhead"
import Paragraph from "../Atoms/paragraph"

export default function TestimonialItem() {
  return (
    <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-44 lg:items-center">
      <img
        className="w-[1000px] md:w-8/12 lg:w-2/5"
        src="/donation2.jpg"
        alt="testimonial"
      />
      <div className="flex flex-col sm:w-10/12">
        <SubHead style="mb-[18px] w-9/12 md:w-full">
          What Our Customers Say
        </SubHead>
        <Paragraph style="mb-9">
          “Be the reason someone smiles today. Donate food to those in need.”
        </Paragraph>
        <div className="flex flex-col font-body">
          <h5 className="text-primary-100 mb-2.5 font-medium">RHA</h5>
          <p className="text-black-300">RHA_INDIA</p>
        </div>
      </div>
    </div>
  );
}
