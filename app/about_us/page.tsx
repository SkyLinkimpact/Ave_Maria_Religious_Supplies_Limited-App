import aboutUsImage from "@/app/_assets/AMRSL-WHO_WE_ARE.jpg";

function AboutUsPage() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div
        className="w-full h-80 lg:h-[75dvh] pt-2 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutUsImage.src})` }}
      >
        <div className="p-4 inset-0 absolute bg-black/55 flex flex-col items-center justify-center text-center">
          <div className="text-slate-50 lg:w-[80ch]">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      <div className="container gap-4 flex flex-col py-8">
        <p>
          Ave Maria Religious Supplies Ltd. is a family run business, we are
          into religious supplies such as sacramentals, baptism and communion
          outfits, altar vessels and linens, priestly vestments, Bibles and
          religious books as well as various cards and gifts for religious
          occasions and celebrations. We are based in Milton Keynes, Bletchley,
          in the Agora indoor shopping centre, just off the main high street on
          Queensway, but we supply items to anywhere around the UK. We also do
          Pop up shops at parishes around our Geo-location or anywhere we are
          invited around the UK.
        </p>
        <p>
          Apart from sales of sacramentals, we also love to provide an
          atmosphere for people to have a healthy discussion about faith and
          their relationship with God.
        </p>
        <p>
          Our ultimate vision as an enterprise is to build an orphanage and
          initiate and support other charities from the proceeds from our sales.
        </p>
        <p>
          We shall be happy to welcome anyone and everyone who wishes to visit
          our shop either to purchase religious articles for themselves or
          others or those who wish to talk about their faith experiences or to
          learn more about God.
        </p>
        <h3>Our Mission statement</h3>
        <p>To Promote faith and reach out to others in charity</p>
      </div>
    </div>
  );
}

export default AboutUsPage;
