import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button variant="default" className="m-8 capitalize">
        click me
      </Button>
    </div>
  );
}

export default HomePage;
