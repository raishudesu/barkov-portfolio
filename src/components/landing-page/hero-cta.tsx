import { Button } from "@/components/ui/button";
import { CirclePlus, Copy } from "lucide-react";
import { Link } from "react-scroll";
import { toast } from "sonner";

const HeroCta = () => {
  const email = "bacaltosbaryshnikov@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);

      toast("Email copied to clipboard ✅");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      <Button
        asChild
        className="text-sm font-medium p-2 px-3 flex gap-2 justify-center items-center rounded-full cursor-pointer  hover:bg-primary-foreground hover:text-primary"
      >
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          offset={-100}
        >
          <CirclePlus size={15} />
          Hire Me
        </Link>
      </Button>
      <Button
        onClick={copyToClipboard}
        variant={"outline"}
        className="flex gap-2 items-center rounded-full bg-transparent backdrop-blur-lg cursor-pointer border-muted-foreground"
      >
        <Copy size={15} />
        Copy Email
      </Button>
    </>
  );
};

export default HeroCta;
