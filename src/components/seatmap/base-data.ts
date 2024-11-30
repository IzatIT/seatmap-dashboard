import { ISTKData } from "@mezh-hq/react-seat-toolkit/types";
import { baseDataCategories } from "./base-data-categories";
import { baseDataImages } from "./base-data-images";
import { baseDataPolylines } from "./base-data-polylines";
import { baseDataSeats } from "./base-data-seats";
import { baseDataSections } from "./base-data-secitons";
import { baseDataShapes } from "./base-data-shapes";
import { baseDataTexts } from "./base-data-texts";

export const baseData: ISTKData = {
    name: "Seatmap 1",
    categories: baseDataCategories,
    sections: baseDataSections,
    seats: baseDataSeats,
    text: baseDataTexts,
    shapes: baseDataShapes,
    polylines: baseDataPolylines,
    images: baseDataImages,
    workspace: {
        visibilityOffset: 1
    }
}