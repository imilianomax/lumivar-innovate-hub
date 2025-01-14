import { RainbowButton } from "@/components/ui/rainbow-button";
import { useNavigate } from "react-router-dom";

const Imprint = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Imprint & Privacy policy
        </h1>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Impressum & Privacy Policy</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Imprint</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Responsible for Content: Maximiliano Amunategui</p>
              <p>Email: max@lumivar.com</p>
              <p>Location: Berlin, Germany</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Privacy Policy</h3>
            <p className="text-muted-foreground">
              This website is committed to respecting your privacy. We collect data only as necessary to
              provide and improve our services, in accordance with GDPR requirements. For any questions
              regarding data processing, please reach out to max@lumivar.com
            </p>
          </div>
        </section>

        <div className="flex justify-center pt-8">
          <RainbowButton onClick={() => navigate("/")}>
            Back to Home page
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default Imprint;