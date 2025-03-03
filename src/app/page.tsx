import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function Home() {
    return (
        <main className="h-96 flex flex-col justify-center text-center gap-6 max-w-5xl mx-auto">

            <div className="text-start">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=Mcw8Mp8PYUE&list=WL&index=2">https://www.youtube.com/watch?v=Mcw8Mp8PYUE&list=WL&index=2</a>
                    </li>
                    <li>
                        <a href="https://ui.shadcn.com">https://ui.shadcn.com</a>
                    </li>
                    <li>
                        <a href="https://lucide.dev/icons">https://lucide.dev/icons</a>
                    </li>
                    <li>
                        <a href="https://xata.io">https://xata.io</a>
                    </li>
                    <li>
                        <a href="https://orm.drizzle.team">https://orm.drizzle.team</a>
                    </li>
                </ul>
            </div>

            <h1 className="text-5xl font-bold ">
                Invoicipedia
            </h1>
            <p>
                <Button asChild>
                    <Link href="/dashboard">
                        Sign In
                    </Link>
                </Button>
            </p>
        </main>
    );
}
