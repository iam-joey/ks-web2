"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function VerifyDetails() {
  const ssnRef = useRef();
  const pnum = useRef();
  const { toast } = useToast();
  const router = useRouter();

  const handleIt = async () => {
    if (!ssnRef.current && !pnum.current) {
      toast({
        description: "Fill in the req details",
        variant: "destructive",
      });
      return;
    }

    if (Math.random() < 0.5) {
      toast({
        description: "User is verifed",
      });
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      router.push("/bookrides");
      return;
    }
    toast({
      description: "User is not verified",
      variant: "destructive",
    });
  };
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-slate-200">
      <div className=" w-full text-center">
        <Card className="max-w-[1000px] mx-auto bg-slate-100 p-4">
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-bold font-serif text-2xl">
                  Social Security
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="max-w-96 mx-auto"
                  onChange={(e: any) => {
                    ssnRef.current = e.target.value;
                  }}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-bold font-serif text-2xl">
                  Phone Number
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="max-w-96 mx-auto"
                  onChange={(e: any) => {
                    pnum.current = e.target.value;
                  }}
                />
              </div>
              <Button onClick={handleIt} className="max-w-36 mx-auto">
                Verify
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
