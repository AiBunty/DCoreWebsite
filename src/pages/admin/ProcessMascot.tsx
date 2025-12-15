import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Download, Loader2, Wand2 } from "lucide-react";
import mascotImage from "@/assets/ai-bunty-mascot.png";
import { removeBackground, loadImage } from "@/lib/remove-background";

export default function ProcessMascot() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState("");

  const processImage = async () => {
    setIsProcessing(true);
    setProcessedImage(null);
    setProgress("Loading image...");

    try {
      setProgress("Loading AI model (this may take a moment)...");
      const img = await loadImage(mascotImage);
      
      setProgress("Removing background...");
      const resultBlob = await removeBackground(img);
      
      const imageUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(imageUrl);
      setProgress("");
      toast.success("Background removed successfully!");
    } catch (error) {
      console.error("Processing error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to process image");
      setProgress("");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "ai-bunty-mascot-transparent.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Image downloaded! Replace src/assets/ai-bunty-mascot.png with this file.");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Mascot Background Remover</h1>
        <p className="text-muted-foreground mb-8">
          Use AI to remove the background from the Ai Bunty mascot image (runs in your browser).
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Original Image */}
          <Card>
            <CardHeader>
              <CardTitle>Original Mascot</CardTitle>
              <CardDescription>Current mascot with background</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-accent rounded-lg p-4 flex items-center justify-center">
                <img
                  src={mascotImage}
                  alt="Original Ai Bunty mascot"
                  className="max-w-full h-auto max-h-64 object-contain"
                />
              </div>
              <Button
                onClick={processImage}
                disabled={isProcessing}
                className="w-full mt-4"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {progress || "Processing..."}
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Remove Background
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Processed Image */}
          <Card>
            <CardHeader>
              <CardTitle>Processed Mascot</CardTitle>
              <CardDescription>Mascot with transparent background</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="rounded-lg p-4 flex items-center justify-center min-h-64"
                style={{
                  background: processedImage
                    ? "repeating-conic-gradient(#80808020 0% 25%, transparent 0% 50%) 50% / 20px 20px"
                    : "hsl(var(--muted))",
                }}
              >
                {processedImage ? (
                  <img
                    src={processedImage}
                    alt="Processed Ai Bunty mascot"
                    className="max-w-full h-auto max-h-64 object-contain"
                  />
                ) : (
                  <p className="text-muted-foreground text-center">
                    Processed image will appear here
                  </p>
                )}
              </div>
              <Button
                onClick={downloadImage}
                disabled={!processedImage}
                variant="secondary"
                className="w-full mt-4"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Transparent PNG
              </Button>
            </CardContent>
          </Card>
        </div>

        {processedImage && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Click "Download Transparent PNG" to save the processed image</li>
                <li>Rename the downloaded file to <code className="bg-muted px-1 rounded">ai-bunty-mascot.png</code></li>
                <li>Replace the file at <code className="bg-muted px-1 rounded">src/assets/ai-bunty-mascot.png</code></li>
                <li>The mascot will now blend seamlessly with all page backgrounds!</li>
              </ol>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
