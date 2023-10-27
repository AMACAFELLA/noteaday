import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
       <div className="flex item-center w-full p-6 bg-background z-50">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
            <Button variant="ghost" size="sm">
                <a href="https://angusmacapella.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a>
            </Button>
            <Button variant="ghost" size="sm">
                <a href="" target="_blank" rel="noreferrer">Privacy Policy</a>
            </Button>
            <Button variant="ghost" size="sm">
                <a href="" target="_blank" rel="noreferrer">Terms & Conditions</a>
            </Button>
        </div>
       </div> 
    )
}