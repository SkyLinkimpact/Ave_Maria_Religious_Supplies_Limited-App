import orphanageImage from "@/app/_assets/orphanage.webp";
import ongoingProjectImage1 from "@/app/_assets/amrsl01.jpg";
import ongoingProjectImage2 from "@/app/_assets/amrsl02.jpg";
import bishopAndClergyImage1 from "@/app/_assets/amrsl03.jpg";
import bishopAndClergyImage2 from "@/app/_assets/amrsl05.jpg";
import foundationLayingImage1 from "@/app/_assets/amrsl06.jpg";
import foundationLayingImage2 from "@/app/_assets/amrsl07.jpg";
import foundationLayingImage3 from "@/app/_assets/amrsl08.jpg";
import foundationLayingImage4 from "@/app/_assets/amrsl09.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

function GalleryItem({
  src,
  alt,
}: Readonly<{ src: string | StaticImport; alt: string }>) {
  return (
    <div className="relative h-80 w-full p-4 border border-muted/50 rounded-md shadow-md bg-card">
      <Image
        src={src}
        alt={alt}
        className="object-center rounded-md p-2"
        fill
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function Gallery({
  children,
  title,
}: Readonly<{ children: ReactNode; title?: string }>) {
  return (
    <div className="w-full gap-4 flex flex-col">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
      {title && <h3>{title}</h3>}
    </div>
  );
}

function OrphanagePage() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div
        className="w-full  min-h-80 lg:min-h-[600px] pt-2 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${orphanageImage.src})` }}
      >
        <div className="p-4 inset-0 absolute bg-black/55 flex flex-col items-center justify-center text-center">
          <div className="text-slate-50 lg:w-[80ch]">
            <h1>Ave Maria Orphanage</h1>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-6">
        <div className="gap-4 flex flex-col divide-y-2">
          <section className="py-6">
            <p>
              The Ave Maria Orphanage is a project rooted in faith and
              compassion.
            </p>
            <p>
              Our vision is to create a safe and nurturing home for orphans and
              vulnerable children—a place where they will receive love, care and
              the guidance they need to grow into confident and hopeful
              individuals.
            </p>
          </section>

          <section className="py-6">
            <h3>Building Hope, Brick by Brick</h3>
            <p>
              We are excited to share that the journey towards constructing the
              Ave Maria Orphanage has already begun. Through God’s grace, we
              have purchased land in Nigeria and laid the foundations for the
              orphanage with the blessings and presence of the local Bishop and
              clergy.
            </p>
            <p>
              Although the doors are not yet open, the foundations—both physical
              and spiritual—are being firmly set. This is the first step in
              building a lasting legacy of hope for children who need it most.
            </p>
          </section>

          <section className="py-6">
            <h3>How our Religious Shop Makes This Possible</h3>
            <p>
              Every milestone we have reached so far has been funded through the
              proceeds of our Religious Shop. From the purchase of the land, to
              the laying of the first stones, your support has been directly
              transforming prayers into reality.
            </p>
            <p>
              When you shop with us, you are not just purchasing meaningful
              religious items—you are actively helping to build a home for
              orphans in Nigeria. Every sale contributes to construction, future
              furnishings, and the long-term running of the orphanage.
            </p>
          </section>

          <section className="py-6">
            <h3>Join us in This Journey</h3>
            <p>
              We are at the beginning of something truly life-changing.
              Together, with your prayers, purchases, and support, we can
              complete the construction and open the doors of Ave Maria
              Orphanage to children who deserve safety, love, and opportunity.
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-6 w-full py-8">
          <h2 className="mb-6 text-center">Photo Gallery</h2>

          <Gallery title="Ongoing Project">
            <GalleryItem src={ongoingProjectImage1} alt="Ongoing Project 1" />
            <GalleryItem src={ongoingProjectImage2} alt="Ongoing Project 2" />
          </Gallery>

          <Gallery title="Bishop &amp; Clergy Blessing the Project">
            <GalleryItem
              src={bishopAndClergyImage1}
              alt="Bishop and Clergy blessing"
            />
            <GalleryItem
              src={bishopAndClergyImage2}
              alt="Bishop and Clergy blessing"
            />
          </Gallery>

          <Gallery title="The Foundation Laying Ceremony">
            <GalleryItem
              src={foundationLayingImage1}
              alt="Foundation Laying Ceremony 1"
            />
            <GalleryItem
              src={foundationLayingImage2}
              alt="Foundation Laying Ceremony 2"
            />
            <GalleryItem
              src={foundationLayingImage3}
              alt="Foundation Laying Ceremony 3"
            />
            <GalleryItem
              src={foundationLayingImage4}
              alt="Foundation Laying Ceremony 4"
            />
          </Gallery>
        </div>
      </div>
    </div>
  );
}

export default OrphanagePage;
