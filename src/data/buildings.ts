import type { BuildingCategory, BuildingType } from "@/types/building";
import { measureLabel, LABEL_PLACEHOLDER_TEXT } from "@/lib/labelMeasure";
import constructorImage from "@/assets/constructor.png";
import foundryImage from "@/assets/foundry.png";
import refineryImage from "@/assets/refinery.png";
import manufacturerImage from "@/assets/manufacturer.png";
import packagerImage from "@/assets/packager.png";
import assemblerImage from "@/assets/assembler.png";
import smelterImage from "@/assets/smelter.png";
import storageContainerImage from "@/assets/storage_container.png";
import conveyorSplitterImage from "@/assets/conveyor_splitter.png";
import conveyorMergerImage from "@/assets/conveyor_merger.png";
import conveyorBeltImage from "@/assets/conveyor_belt.png";
import conveyorBeltTurnImage from "@/assets/conveyor_belt_turn.png";
import coalPoweredGeneratorImage from "@/assets/coal_powered_generator.png";
import conveyorLiftFloorImage from "@/assets/conveyor_lift_floor.png";
import conveyorLiftCeilingImage from "@/assets/conveyor_lift_ceiling.png";
import fuelPoweredGeneratorImage from "@/assets/fuel_powered_generator.png";
import pipeImage from "@/assets/pipe.png";
import pipeTurnImage from "@/assets/pipe_turn.png";
import pipeJunctionImage from "@/assets/pipe_junction.png";
import pipeJunctionVerticalImage from "@/assets/pipe_junction_vertical.png";
import pipeFromAboveImage from "@/assets/pipe_from_above.png";
import pipeFromBelowImage from "@/assets/pipe_from_below.png";

export const BUILDING_TYPES: BuildingType[] = [
  {
    key: "assembler",
    name: "Assembler",
    category: "production",
    widthMeters: 9,
    lengthMeters: 16,
    image: assemblerImage,
    imageGuide: { x: 0.068, y: 0.03, w: 0.85, h: 0.94 },
  },
  {
    key: "coal_powered_generator",
    name: "Coal-Powered Generator",
    category: "power",
    widthMeters: 10,
    lengthMeters: 26,
    image: coalPoweredGeneratorImage,
    imageGuide: { x: 0.083, y: 0.036, w: 0.834, h: 0.94 },
  },
  {
    key: "fuel_powered_generator",
    name: "Fuel-Powered Generator",
    category: "power",
    widthMeters: 20,
    lengthMeters: 20,
    image: fuelPoweredGeneratorImage,
    imageGuide: { x: 0.037, y: 0.01, w: 0.927, h: 0.98 },
  },
  {
    key: "constructor",
    name: "Constructor",
    category: "production",
    widthMeters: 8,
    lengthMeters: 10,
    image: constructorImage,
    imageGuide: { x: 0.099, y: 0.09, w: 0.802, h: 0.911 },
  },
  {
    key: "foundry",
    name: "Foundry",
    category: "production",
    widthMeters: 10,
    lengthMeters: 10,
    image: foundryImage,
    imageGuide: { x: 0, y: 0.15, w: 1, h: 0.79 },
  },
  {
    key: "manufacturer",
    name: "Manufacturer",
    category: "production",
    widthMeters: 18,
    lengthMeters: 20,
    image: manufacturerImage,
    imageGuide: { x: 0.05, y: 0.03, w: 0.9, h: 0.878 },
  },
  {
    key: "packager",
    name: "Packager",
    category: "production",
    widthMeters: 8,
    lengthMeters: 8,
    image: packagerImage,
    imageGuide: { x: 0.104, y: 0.1, w: 0.82, h: 0.8 },
  },
  {
    key: "refinery",
    name: "Refinery",
    category: "production",
    widthMeters: 10,
    lengthMeters: 22,
    image: refineryImage,
    imageGuide: { x: 0.14, y: 0.045, w: 0.72, h: 0.91 },
  },
  {
    key: "smelter",
    name: "Smelter",
    category: "production",
    widthMeters: 6,
    lengthMeters: 9,
    image: smelterImage,
    imageGuide: { x: 0.131, y: 0, w: 0.787, h: 0.989 },
  },
  {
    key: "storage_container",
    name: "Storage Container",
    category: "organization",
    widthMeters: 5,
    lengthMeters: 11,
    image: storageContainerImage,
    imageGuide: { x: 0.1, y: 0.05, w: 0.8, h: 0.9 },
  },
  {
    key: "conveyor_belt",
    name: "Conveyor Belt",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 1,
    image: conveyorBeltImage,
    imageGuide: { x: 0.14, y: 0, w: 0.72, h: 1 },
    linear: true,
  },
  {
    key: "pipe",
    name: "Pipeline",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 1,
    image: pipeImage,
    imageGuide: { x: 0.1, y: 0.01, w: 0.8, h: 0.98 },
    linear: true,
  },
  {
    key: "pipe_turn",
    name: "Pipeline 90° Turn",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: pipeTurnImage,
    imageGuide: { x: 0.11, y: 0.11, w: 0.91, h: 0.91 },
  },
  {
    key: "pipe_junction",
    name: "Pipeline junction ",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: pipeJunctionImage,
    imageGuide: { x: 0.13, y: 0.13, w: 0.74, h: 0.74 },
  },
  {
    key: "pipe_junction_vertical",
    name: "Pipeline junction vertical",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: pipeJunctionVerticalImage,
    imageGuide: { x: 0.05, y: 0.13, w: 0.9, h: 0.74 },
  },
  {
    key: "pipe_from_above",
    name: "Pipeline from above",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: pipeFromAboveImage,
    imageGuide: { x: 0.05, y: 0.09, w: 0.96, h: 0.82 },
  },
  {
    key: "pipe_from_below",
    name: "Pipeline from below",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: pipeFromBelowImage,
    imageGuide: { x: 0.1, y: 0.12, w: 0.91, h: 0.76 },
  },
  {
    key: "conveyor_belt_turn",
    name: "Conveyor Belt 90° Turn",
    category: "logistics",
    widthMeters: 3,
    lengthMeters: 3,
    image: conveyorBeltTurnImage,
    imageGuide: { x: 0.11, y: 0, w: 0.88, h: 0.88 },
  },
  {
    key: "conveyor_splitter",
    name: "Conveyor Splitter",
    category: "logistics",
    widthMeters: 4,
    lengthMeters: 4,
    image: conveyorSplitterImage,
    imageGuide: { x: 0.15, y: 0.15, w: 0.7, h: 0.7 },
  },
  {
    key: "conveyor_merger",
    name: "Conveyor Merger",
    category: "logistics",
    widthMeters: 4,
    lengthMeters: 4,
    image: conveyorMergerImage,
    imageGuide: { x: 0.15, y: 0.15, w: 0.7, h: 0.7 },
  },
  {
    key: "conveyor_lift_floor",
    name: "Conveyor Lift from floor",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: conveyorLiftFloorImage,
    imageGuide: { x: 0.17, y: 0.21, w: 0.47, h: 0.58 },
  },
  {
    key: "conveyor_lift_ceiling",
    name: "Conveyor Lift from ceiling",
    category: "logistics",
    widthMeters: 2,
    lengthMeters: 2,
    image: conveyorLiftCeilingImage,
    imageGuide: { x: 0.18, y: 0.21, w: 0.46, h: 0.58 },
  },
  {
    key: "text_label",
    name: "Text Label",
    category: "misc",
    // Type defaults match the placeholder's measured size so the placement
    // ghost is the same shape as the label that lands.
    ...measureLabel(LABEL_PLACEHOLDER_TEXT),
    isLabel: true,
  },
  {
    key: "wall",
    name: "Wall",
    category: "misc",
    // Walls have no inherent size; per-instance endpoints define the geometry.
    widthMeters: 0,
    lengthMeters: 0,
    isWall: true,
  },
];

export const BUILDING_TYPES_BY_KEY: Record<string, BuildingType> =
  Object.fromEntries(BUILDING_TYPES.map((t) => [t.key, t]));

/** Display order and header labels for the buildings palette. */
export const BUILDING_CATEGORIES: { key: BuildingCategory; label: string }[] = [
  { key: "production", label: "Production" },
  { key: "power", label: "Power" },
  { key: "logistics", label: "Logistics" },
  { key: "organization", label: "Organization" },
  { key: "misc", label: "Misc" },
];
