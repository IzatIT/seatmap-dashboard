import SeatToolkit from "@mezh-hq/react-seat-toolkit";
import { baseData } from "./base-data";

export const AppSeatMap = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <SeatToolkit
                mode="designer"
                options={{
                    exportButtonText: "Сохранить"
                }}
                data={baseData}
                styles={{
                    elements: {
                        seat: {
                            base: {
                                properties: {
                                    width: "30px",
                                    height: "30px"
                                }
                            }
                        }
                    },
                    workspace: {
                        container: {
                            properties: {
                                height: "100vh",
                            }
                        }
                    }
                }}
                events={{
                    onSeatClick: (seat) => {
                        console.log(seat);
                    },
                    onExport(data) {
                        console.log(JSON.stringify(data))
                    },
                    onSectionClick: (section) => {
                        console.log(section);
                    }
                }}
            />
        </div>
    );
}
