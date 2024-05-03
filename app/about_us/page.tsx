import React from "react";

function AboutUsPage() {
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-2xl lg:text-4xl">Who We Are</h1>
      <div className="space-y-4">
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
      </div>

      <h3 className="text-lg lg:text-2xl">Our Mission statement</h3>
      <p>To Promote faith and reach out to others in charity</p>
    </div>
  );
}

export default AboutUsPage;
