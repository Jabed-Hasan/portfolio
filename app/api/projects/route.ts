import { NextResponse } from "next/server";
import { projects } from "@/data";

export async function GET() {
  try {
    // Return the projects data from the index.ts file
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error serving projects data:", error);
    return NextResponse.json(
      { error: "Failed to load projects data" },
      { status: 500 }
    );
  }
}
