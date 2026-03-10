import { certificates } from "@/constants/data";
import SpotlightCard from "../SpotlightCard";
import { Separator } from "../ui/separator";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-background py-20 px-4 text-foreground sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4  space-mono-regular">
            Certificates
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, idx) => (
            <SpotlightCard key={idx}>
              <img
                src={certificate.certificateImageUrl}
                alt={certificate.certificateImageAlt}
              />
              <Separator orientation="horizontal" className="my-4" />
              <h3 className="text-xl font-bold">
                {certificate.certificateName}
              </h3>
              <p className="text-sm text-muted-foreground">
                {certificate.certificateDescription}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
