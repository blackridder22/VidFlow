"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, AlertTriangle } from "lucide-react";

interface PrivacyModalProps {
  children: React.ReactNode;
}

export function PrivacyModal({ children }: PrivacyModalProps) {
  const [open, setOpen] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);

  React.useEffect(() => {
    const hasAccepted = localStorage.getItem("privacy-terms-accepted");
    if (!hasAccepted) {
      setOpen(true);
    } else {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacy-terms-accepted", "true");
    setAccepted(true);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Shield className="h-6 w-6 text-teal-500" />
              Terms of Service & Privacy Policy
            </DialogTitle>
            <DialogDescription>
              Please read and accept our terms before using VidFlow
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6 text-sm">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      IMPORTANT LEGAL NOTICE
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      By using this service, you acknowledge and agree that you are solely responsible for ensuring your use complies with all applicable laws, regulations, and third-party terms of service.
                    </p>
                  </div>
                </div>
              </div>

              <section>
                <h3 className="font-semibold text-lg mb-3">1. Acceptance of Terms</h3>
                <p className="mb-3">
                  By accessing and using VidFlow (&quot;the Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you must not use the Service.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">2. Service Description</h3>
                <p className="mb-3">
                  VidFlow is a web-based application that facilitates the downloading of publicly available Instagram content, including but not limited to videos, images, and reels. The Service operates by processing URLs provided by users and retrieving content from Instagram&apos;s public APIs and interfaces.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">3. User Responsibilities and Compliance</h3>
                <div className="space-y-3">
                  <p>
                    <strong>3.1 Legal Compliance:</strong> You warrant and represent that your use of the Service complies with all applicable federal, state, local, and international laws, regulations, and ordinances, including but not limited to copyright laws, privacy laws, and terms of service of third-party platforms.
                  </p>
                  <p>
                    <strong>3.2 Intellectual Property Rights:</strong> You acknowledge that downloaded content may be subject to copyright, trademark, or other intellectual property rights. You are solely responsible for ensuring you have the necessary rights, permissions, or licenses to download, use, distribute, or modify any content obtained through the Service.
                  </p>
                  <p>
                    <strong>3.3 Third-Party Terms:</strong> You agree to comply with Instagram&apos;s Terms of Service, Community Guidelines, and any other applicable policies. You acknowledge that downloading content may violate Instagram&apos;s terms, and you assume all risks associated with such actions.
                  </p>
                  <p>
                    <strong>3.4 Prohibited Uses:</strong> You shall not use the Service for any unlawful purpose, including but not limited to: (a) violating any person&apos;s privacy rights; (b) infringing upon intellectual property rights; (c) harassment, stalking, or cyberbullying; (d) commercial exploitation without proper authorization; or (e) any activity that could harm minors.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">4. Disclaimer of Warranties and Limitation of Liability</h3>
                <div className="space-y-3">
                  <p>
                    <strong>4.1 &quot;AS IS&quot; Basis:</strong> The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                  <p>
                    <strong>4.2 No Liability:</strong> To the maximum extent permitted by applicable law, the Service providers, their affiliates, officers, directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
                  </p>
                  <p>
                    <strong>4.3 User Assumption of Risk:</strong> You expressly acknowledge and agree that you use the Service at your own risk and that you will be solely responsible for any damage to your computer system, loss of data, or other harm that results from your use of the Service.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">5. Indemnification</h3>
                <p className="mb-3">
                  You agree to defend, indemnify, and hold harmless the Service providers and their respective affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including but not limited to attorney&apos;s fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights, including without limitation any copyright, property, or privacy right; or (d) any claim that your use of the Service caused damage to a third party.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">6. Privacy and Data Collection</h3>
                <div className="space-y-3">
                  <p>
                    <strong>6.1 Data Minimization:</strong> We collect minimal data necessary for the Service to function, including URLs you submit and basic usage analytics.
                  </p>
                  <p>
                    <strong>6.2 No Personal Content Storage:</strong> We do not permanently store downloaded content on our servers. Content is processed temporarily and deleted after processing.
                  </p>
                  <p>
                    <strong>6.3 Third-Party Services:</strong> The Service may interact with third-party services (including Instagram) which have their own privacy policies and terms of service.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">7. Modifications and Termination</h3>
                <p className="mb-3">
                  We reserve the right to modify, suspend, or terminate the Service or these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">8. Governing Law and Jurisdiction</h3>
                <p className="mb-3">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of [Jurisdiction].
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">9. Severability</h3>
                <p className="mb-3">
                  If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-lg mb-3">10. Contact Information</h3>
                <p className="mb-3">
                  For questions about these Terms or the Service, please contact us through the appropriate channels provided on our website.
                </p>
              </section>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mt-6">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  <strong>FINAL NOTICE:</strong> By clicking &quot;Accept and Continue,&quot; you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. You further acknowledge that you are solely responsible for your use of this Service and any consequences thereof.
                </p>
              </div>
            </div>
          </ScrollArea>
          
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => window.close()}>
              Decline
            </Button>
            <Button onClick={handleAccept} className="bg-teal-600 hover:bg-teal-700">
              Accept and Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {accepted && children}
    </>
  );
}

export function PrivacyTrigger() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-xs">
          Privacy & Terms
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-6 w-6 text-teal-500" />
            Terms of Service & Privacy Policy
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            {/* Same content as above but without the acceptance logic */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    IMPORTANT LEGAL NOTICE
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    By using this service, you acknowledge and agree that you are solely responsible for ensuring your use complies with all applicable laws, regulations, and third-party terms of service.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground">
              Please refer to the full terms displayed on first visit for complete legal information.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}