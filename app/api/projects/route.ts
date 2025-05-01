import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Read the projects JSON file
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const projects = JSON.parse(fileContents);

    // Return the projects data
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error reading projects data:", error);
    return NextResponse.json(
      { error: "Failed to load projects data" },
      { status: 500 }
    );
  }
}
