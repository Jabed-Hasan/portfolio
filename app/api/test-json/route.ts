import { NextResponse } from "next/server";
import { projects } from "@/data";

export async function GET() {
  try {
    // Return information about the projects data
    const results = {
      dataSource: "index.ts",
      projectCount: projects.length,
      message:
        "Projects are now sourced from data/index.ts instead of JSON files",
    };

    // Return test results
    return NextResponse.json(results, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: `Error: ${error.message}` },
      { status: 500 }
    );
  }
}
