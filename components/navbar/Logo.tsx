import { Tent } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <Tent className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
