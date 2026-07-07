import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface SpecRow {
  desc: string;
  unit: string;
  value: string;
  isHeader?: boolean;
}

const vmcSpecs: SpecRow[] = [
  // CAPACITY Group
  { desc: "CAPACITY", isHeader: true, unit: "", value: "" },
  { desc: "Table Longitudinal Travel (X-Axis Stroke)", unit: "mm", value: "1100" },
  { desc: "Table Cross Travel (Y-Axis Stroke)", unit: "mm", value: "700" },
  { desc: "Head Stock Travel (Z-Axis Stroke)", unit: "mm", value: "700" },
  { desc: "Spindle Nose Face To Table Top", unit: "mm", value: "150 - 850" },
  { desc: "Distance From Floor to Table", unit: "mm", value: "950" },
  { desc: "Spindle Center - Z Cover Front Distance", unit: "mm", value: "710" },

  // SPINDLE Group
  { desc: "SPINDLE", isHeader: true, unit: "", value: "" },
  { desc: "Taper", unit: "Type", value: "BT-40" },
  { desc: "Speed Standard", unit: "RPM", value: "8000" },
  { desc: "Spindle Motor Power 15 min./cont. (Siemens)", unit: "kW", value: "15 / 11" },
  { desc: "Spindle Torque 15 min./cont. (Siemens)", unit: "Nm", value: "106 / 70" },
  { desc: "Spindle Motor Power 15 min./cont. (Fanuc + Mitsubishi)", unit: "kW", value: "15 / 11" },
  { desc: "Spindle Torque 15 min./cont. (Fanuc + Mitsubishi)", unit: "Nm", value: "95 / 52" },
  
  // FEED RATE Group
  { desc: "FEED RATE", isHeader: true, unit: "", value: "" },
  { desc: "Maximum Cutting Feed Rate (X/Y/Z)", unit: "mm/min", value: "10000" },
  { desc: "Rapid Feed Rate (X/Y/Z)", unit: "mm/min", value: "24000" },
  
  // TABLE Group
  { desc: "TABLE", isHeader: true, unit: "", value: "" },
  { desc: "Table Size", unit: "mm", value: "1300 × 700" },
  { desc: "T-Slot (No / Size / Pitch)", unit: "mm", value: "5 / 18 / 125" },
  { desc: "Maximum Load On Table", unit: "kg", value: "1200" },
  
  // ATC Group
  { desc: "ATC (Automatic Tool Changer)", isHeader: true, unit: "", value: "" },
  { desc: "Tool Change System", unit: "Type", value: "Dual Arm" },
  { desc: "Tool Storage Capacity (Std.)", unit: "Nos.", value: "24" },
  { desc: "Pull Stud", unit: "Type", value: "45 Degree" },
  { desc: "Max. Tool Dia With All Pockets Full", unit: "mm", value: "80" },
  { desc: "Max. Tool Dia Adjacent Pocket Empty", unit: "mm", value: "125" },
  { desc: "Max. Tool Length", unit: "mm", value: "250" },
  { desc: "Max. Tool Weight", unit: "kg", value: "8" },
  { desc: "Tool to Tool Time", unit: "sec", value: "2" },
  
  // OTHERS Group
  { desc: "OTHERS", isHeader: true, unit: "", value: "" },
  { desc: "Positioning Repeatability X/Y/Z", unit: "mm", value: "±0.005" },
  { desc: "Positioning Accuracy X/Y/Z", unit: "mm", value: "0.008" },
  { desc: "Weight (Approx.)", unit: "kg", value: "7500" },
  { desc: "Lubrication Tank Capacity", unit: "ltr", value: "3" },
  { desc: "Coolant Tank Capacity (Approx.)", unit: "ltr", value: "400" },
  { desc: "Machine Total Overall Size with Guard (Approx.) (L × W × H)", unit: "mm", value: "2850 × 2850 × 2900" },
];

const axisSpecs: SpecRow[] = [
  // CAPACITY Group
  { desc: "CAPACITY", isHeader: true, unit: "", value: "" },
  { desc: "Turn Table Diameter", unit: "mm", value: "Ø320" },
  { desc: "Table Center Height", unit: "mm", value: "210" },
  { desc: "Center Bore Diameter", unit: "mm", value: "Ø115 H7" },
  { desc: "Through Bore", unit: "mm", value: "Ø110" },
  { desc: "T-Slot Numbers", unit: "Nos.", value: "8" },
  { desc: "Reference Slots", unit: "mm", value: "14 H7" },
  { desc: "Other Slots", unit: "mm", value: "14 H8" },
  { desc: "Tennon Slot Size", unit: "mm", value: "18 H7" },

  // OPERATIONAL DATA Group
  { desc: "Operational Data", isHeader: true, unit: "", value: "" },
  { desc: "Servo Motor Torque", unit: "N·m", value: "6" },
  { desc: "Speed Reduction Ratio", unit: "-", value: "1:144" },
  { desc: "Table Gyration Angle / Pulse", unit: "Degree", value: "0.001°" },
  { desc: "Table Rotation Speed (Motor 3000 rpm)", unit: "rpm", value: "20.83" },

  // LOAD & FORCE DATA Group
  { desc: "Load & Force Data", isHeader: true, unit: "", value: "" },
  { desc: "Load Capacity (Horizontal)", unit: "kg", value: "600" },
  { desc: "Load Capacity (Vertical)", unit: "kg", value: "250" },
  { desc: "Load Capacity with Tailstock Support", unit: "kg", value: "600" },
  { desc: "Maximum Thrust Load (Horizontal)", unit: "N", value: "24,000" },
  { desc: "Maximum Thrust Load (Vertical)", unit: "N", value: "8,500" },
  { desc: "Tilting Moment (Horizontal) (F×L)", unit: "N·m", value: "3,000" },
  { desc: "Tilting Moment (Vertical) (F×L)", unit: "N·m", value: "2,000" },
  { desc: "Hydraulic Clamping Torque @ 30 Bar", unit: "N·m", value: "1,100" },
  { desc: "Driving Torque", unit: "N·m", value: "636" },

  // ACCURACY Group
  { desc: "Accuracy", isHeader: true, unit: "", value: "" },
  { desc: "Indexing Accuracy", unit: "sec", value: "±15″" },
  { desc: "Repeatability", unit: "sec", value: "4″" },
  { desc: "Table Top Flatness (Overall Length)", unit: "mm", value: "0.01" },
  { desc: "Table Top Runout", unit: "mm", value: "0.015" },
  { desc: "Centre Bore Runout", unit: "mm", value: "0.01" },
  { desc: "Perpendicularity of Table Top to Base (Vertical Position)", unit: "mm", value: "0.02" },

  // PHYSICAL DATA Group
  { desc: "Physical Data", isHeader: true, unit: "", value: "" },
  { desc: "Net Weight (Approx.)", unit: "kg", value: "200" },

  // DRAWING DIMENSIONS (Page 1) Group
  { desc: "Drawing Dimensions (Page 1)", isHeader: true, unit: "", value: "" },
  { desc: "Overall Height", unit: "", value: "385 mm" },
  { desc: "Body Height", unit: "", value: "377 mm" },
  { desc: "Table Center Height", unit: "", value: "210 mm" },
  { desc: "Base Height", unit: "", value: "30 mm" },
  { desc: "Base Width", unit: "", value: "342 mm" },
  { desc: "Overall Length*", unit: "", value: "#666 mm" },
  { desc: "Side Width", unit: "", value: "238 mm" },
  { desc: "Inner Width", unit: "", value: "222 mm" },
  { desc: "Mounting Distance", unit: "", value: "179 mm" },
  { desc: "Offset", unit: "", value: "21.5 mm" },
  { desc: "Top Projection", unit: "", value: "72 mm" },
  { desc: "Machine Height", unit: "", value: "291 mm" },
  { desc: "Base Height", unit: "", value: "281 mm" },
  { desc: "Rotary Table Diameter", unit: "", value: "Ø320 mm" },
  { desc: "Center Bore", unit: "", value: "Ø115 H7" },
  { desc: "Through Bore", unit: "", value: "Ø110 mm" },
  { desc: "Bore Depth", unit: "", value: "57.5 mm" },
  { desc: "PCD", unit: "", value: "190 mm" },
  { desc: "T-Slot Width", unit: "", value: "14 mm" },
  { desc: "T-Slot Depth", unit: "", value: "23 mm" },
  { desc: "Tennon Width", unit: "", value: "18 j6" },
];

const rig500Specs: SpecRow[] = [
  { desc: "Swing Over The Bed", unit: "mm", value: "550" },
  { desc: "Swing Over Carriage", unit: "mm", value: "280" },
  { desc: "Max. Turning Dia.", unit: "mm", value: "300" },
  { desc: "Max. Turning Length", unit: "mm", value: "480" },
  { desc: "Spindle Nose", unit: "Type", value: "A2-6" },
  { desc: "Spindle Bore", unit: "mm", value: "63" },
  { desc: "Max. Bar Capacity Through Spindle", unit: "mm", value: "51" },
  { desc: "Chuck Size Std. / Optional", unit: "mm", value: "200 / 250" },
  { desc: "Spindle Speed Range Min. - Max.", unit: "RPM", value: "50 - 3500" },
  { desc: "Siemens 828D Motor (15 min / cont.)", unit: "kW", value: "11 / 9" },
  { desc: "Siemens 828D Spindle Torque (15 min / cont.)", unit: "N-m", value: "192 / 110" },
  { desc: "Fanuc OI-TF / Mitsubishi LA Motor (15 min / cont.)", unit: "kW", value: "11 / 7.5" },
  { desc: "Fanuc OI-TF / Mitsubishi LA Spindle Torque (15 min / cont.)", unit: "N-m", value: "140 / 70" },
  { desc: "X-Axis Stroke", unit: "mm", value: "170" },
  { desc: "Z-Axis Stroke", unit: "mm", value: "480" },
  { desc: "Max. Cutting Feed Rate (X/Z)", unit: "mm/min", value: "10000" },
  { desc: "Rapid Feed Rate (X/Z)", unit: "mm/min", value: "24000" },
  { desc: "Quill Diameter", unit: "mm", value: "85" },
  { desc: "Quill Stroke", unit: "mm", value: "120" },
  { desc: "Taper in Quill", unit: "Type", value: "MT-4" },
  { desc: "Maximum Quill Thrust", unit: "kgf", value: "1500" },
  { desc: "Tail Stock Body Travel", unit: "mm", value: "420" },
  { desc: "Turret Size", unit: "Size", value: "80" },
  { desc: "Turret Type", unit: "Type", value: "HYD." },
  { desc: "No. of Tool Station", unit: "Nos.", value: "8" },
  { desc: "Max. Boring Bar Diameter", unit: "mm", value: "40" },
  { desc: "Tool Shank", unit: "mm × mm", value: "25 × 25" },
  { desc: "Positioning Repeatability X/Z", unit: "mm", value: "±0.005" },
  { desc: "Positioning Accuracy X/Z", unit: "mm", value: "0.008" },
  { desc: "Hydraulic Tank Capacity", unit: "Ltr.", value: "40" },
  { desc: "Lubricating Tank Capacity", unit: "Ltr.", value: "3" },
  { desc: "Coolant Tank (Approx.)", unit: "Ltr.", value: "180" },
  { desc: "Machine Weight (Approx.)", unit: "Kg.", value: "3200" },
];

const rig1200Specs: SpecRow[] = [
  { desc: "Swing Over The Bed", unit: "mm", value: "800" },
  { desc: "Swing Over Carriage", unit: "mm", value: "500" },
  { desc: "Max. Turning Dia.", unit: "mm", value: "400" },
  { desc: "Max. Turning Length", unit: "mm", value: "1180" },
  { desc: "Spindle Nose", unit: "Type", value: "A2-8" },
  { desc: "Spindle Bore", unit: "mm", value: "90" },
  { desc: "Max. Bar Capacity Through Spindle", unit: "mm", value: "75" },
  { desc: "Chuck Size Std. / Optional", unit: "mm", value: "250/300" },
  { desc: "Spindle Speed Range Min.-Max.", unit: "RPM", value: "50-2500" },
  { desc: "Siemens 828D Motor (15 min / cont.)", unit: "kW", value: "16/12" },
  { desc: "Siemens 828D Spindle Torque (15 min / cont.)", unit: "N-m", value: "395/264" },
  { desc: "Fanuc Oi-TF / Mitsubishi LA Motor (15 min / cont.)", unit: "kW", value: "15/11" },
  { desc: "Fanuc Oi-TF / Mitsubishi LA Spindle Torque (15 min / cont.)", unit: "N-m", value: "218/119" },
  { desc: "X-Axis Stroke", unit: "mm", value: "210" },
  { desc: "Z-Axis Stroke", unit: "mm", value: "1180" },
  { desc: "Max. Cutting Feed Rate (X/Z)", unit: "mm/min", value: "10000" },
  { desc: "Rapid Feed Rate (X/Z)", unit: "mm/min", value: "20000" },
  { desc: "Quill Diameter", unit: "mm", value: "100" },
  { desc: "Quill Stroke", unit: "mm", value: "120" },
  { desc: "Taper in Quill", unit: "Type", value: "MT-5" },
  { desc: "Maximum Quill Thrust", unit: "kgf", value: "1800" },
  { desc: "Tail Stock Body Travel", unit: "mm", value: "1000" },
  { desc: "Turret Size", unit: "Size", value: "100" },
  { desc: "Turret Type", unit: "Type", value: "HYD." },
  { desc: "No. of Tool Station", unit: "Nos.", value: "8" },
  { desc: "Max. Boring Bar Diameter", unit: "mm", value: "40" },
  { desc: "Tool Shank", unit: "mm × mm", value: "25 × 25" },
  { desc: "Positioning Repeatability X/Z", unit: "mm", value: "±0.005" },
  { desc: "Positioning Accuracy X/Z", unit: "mm", value: "0.008" },
  { desc: "Hydraulic Tank Capacity", unit: "Ltr.", value: "40" },
  { desc: "Lubricating Tank Capacity", unit: "Ltr.", value: "3" },
  { desc: "Coolant Tank (Approx.)", unit: "Ltr.", value: "280" },
  { desc: "Machine Weight (Approx.)", unit: "Kg.", value: "5800" },
];

const BentoSection = () => {
  const [selectedSpecsMachine, setSelectedSpecsMachine] = useState<string | null>(null);
  const [vmcSpecTab, setVmcSpecTab] = useState<"vmc" | "axis">("vmc");

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Separator */}
        <div className="w-full h-[5px] rounded-[10px] bg-secondary mb-12 lg:mb-24" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] mb-12 lg:mb-[80px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold text-xl sm:text-[30px] leading-tight sm:leading-[42px]">
              OUR CAPABILITIES
            </span>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl md:text-[60px] leading-tight md:leading-[72px] tracking-[-1.2px] mt-4">
              Machinery & Infrastructure 
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:w-1/2 flex items-center"
          >
            <p className="text-foreground font-bold text-lg sm:text-xl md:text-[30px] leading-normal md:leading-[42px]">
              Modern equipment powering precision engineering — built to handle complex manufacturing with speed, 
              accuracy, and reliable performance.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Box 1 - Large with VMC image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedSpecsMachine("vmc")}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-1 md:order-1 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            title="Click to view specifications"
          >
            <img
              src="/images/a2.jpeg"
              alt="KTM VMC with 4th Axis"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                KTM VMC with 4th Axis
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-1 sm:mt-2">
                Advanced vertical machining center
              </p>
              <div className="w-full h-[5px] rounded-[10px] bg-primary my-3 sm:my-5" />
              <div className="text-dark-foreground font-extrabold text-lg sm:text-xl md:text-2xl lg:text-[39px] leading-tight tracking-[-0.8px] uppercase flex flex-wrap items-baseline gap-x-3">
                <span>UCAM</span>
                <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-dark-foreground/80 normal-case">
                  Ø320 LARGE BORE ROTARY TABLE MODEL : ULBR-320
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 2 - VMC Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelectedSpecsMachine("vmc")}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-start text-left p-6 sm:p-10 order-2 md:order-2 cursor-pointer shadow-sm hover:shadow-md hover:bg-secondary/95 transition-all duration-300"
            title="Click to view specifications"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
               KTM VMC with 4th Axis
             </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary/70 my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Advanced vertical machining center designed for multi-axis operations, enabling precise machining on multiple sides 
              in a single setup—improving accuracy, reducing production time, and ensuring high efficiency for complex components.
            </p>
            <button 
              className="mt-6 px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs tracking-wider uppercase rounded-full shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSpecsMachine("vmc");
                setVmcSpecTab("vmc");
              }}
            >
              <span>Click here</span>
              <ChevronRight size={12} />
            </button>
          </motion.div>

          {/* Box 3 - RIG 1200+ Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedSpecsMachine("rig1200")}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-start text-left p-6 sm:p-10 order-4 md:order-3 cursor-pointer shadow-sm hover:shadow-md hover:bg-secondary/95 transition-all duration-300"
            title="Click to view specifications"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
              KTM CNC Lathe RIG 1200+
            </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
               Heavy-duty CNC lathe engineered for high-precision turning of large and complex components, 
               ensuring consistent accuracy, smooth finishes, and reliable performance in demanding industrial applications.
            </p>
            <button 
              className="mt-6 px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs tracking-wider uppercase rounded-full shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSpecsMachine("rig1200");
              }}
            >
              <span>Click here</span>
              <ChevronRight size={12} />
            </button>
          </motion.div>

          {/* Box 4 - Large with RIG 1200+ image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelectedSpecsMachine("rig1200")}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-3 md:order-4 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            title="Click to view specifications"
          >
            <img
              src="/images/a3.jpeg"
              alt="KTM CNC Lathe RIG 1200+"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                KTM CNC Lathe RIG 1200+
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Heavy-duty turning operations
              </p>
            </div>
          </motion.div>

          {/* Box 5 - Large with RIG 500+ image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedSpecsMachine("rig500")}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-5 md:order-5 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            title="Click to view specifications"
          >
            <img
              src="/images/a1.jpeg"
              alt="KTM CNC Lathe RIG 500+"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                KTM CNC Lathe RIG 500+
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Precision turning solutions
              </p>
            </div>
          </motion.div>

          {/* Box 6 - RIG 500+ Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelectedSpecsMachine("rig500")}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-start text-left p-6 sm:p-10 order-6 md:order-6 cursor-pointer shadow-sm hover:shadow-md hover:bg-secondary/95 transition-all duration-300"
            title="Click to view specifications"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
              KTM CNC Lathe RIG 500+
            </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Compact yet powerful CNC lathe built for precision turning of medium-sized components, 
              delivering high accuracy, smooth finishes, and efficient performance for both batch and custom production.
            </p>
            <button 
              className="mt-6 px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs tracking-wider uppercase rounded-full shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSpecsMachine("rig500");
              }}
            >
              <span>Click here</span>
              <ChevronRight size={12} />
            </button>
          </motion.div>

          {/* Box 7 - Tolerance & Precision */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] bg-secondary overflow-hidden flex flex-col justify-center items-start text-left p-6 sm:p-10 order-8 md:order-7 shadow-sm"
          >
            <h3 className="text-foreground font-extrabold text-xl sm:text-2xl md:text-[32px] leading-tight tracking-[-0.8px]">
              Tolerance & Precision
            </h3>
            <div className="w-20 h-[5px] rounded-[10px] bg-primary my-4" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We maintain high standards of precision machining across all components through advanced manufacturing processes, rigorous quality inspections, and strict adherence to engineering specifications. Every part is carefully produced to ensure consistent quality, reliability, and compliance with project requirements.
            </p>
          </motion.div>

          {/* Box 8 - Quality Control */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group order-7 md:order-8 shadow-sm"
          >
            <img
              src="/images/pr4.png"
              alt="Precision Quality Control"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="w-full h-[5px] rounded-[10px] bg-primary mb-3 sm:mb-5" />
              <h3 className="text-dark-foreground font-extrabold text-xl sm:text-2xl md:text-[39px] leading-tight tracking-[-0.8px]">
                Precision Quality Control
              </h3>
              <p className="text-dark-foreground/90 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                Strict dimensional verification for perfect fitting
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Specifications Modal Popup */}
      <AnimatePresence>
        {selectedSpecsMachine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 sm:p-6"
            onClick={() => { setSelectedSpecsMachine(null); setVmcSpecTab("vmc"); }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-background/95 border border-white/10 rounded-3xl w-full max-w-[800px] max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button in Top-Right Corner */}
              <button
                onClick={() => { setSelectedSpecsMachine(null); setVmcSpecTab("vmc"); }}
                aria-label="Close specifications"
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary/80 text-foreground transition-all duration-200 cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-12">
                  <div>
                    <h3 className="text-foreground font-extrabold text-xl sm:text-2xl tracking-tight">
                      {selectedSpecsMachine === "vmc" 
                        ? (vmcSpecTab === "vmc" ? "KTM VMC Specifications" : "4th Axis Specifications") 
                        : selectedSpecsMachine === "rig500" 
                        ? "RIG 500 Specifications" 
                        : "RIG 1200 Specifications"}
                    </h3>
                    <div className="w-16 h-[4px] bg-primary mt-2 mb-2 sm:mb-0 rounded-full" />
                  </div>
                  {selectedSpecsMachine === "vmc" && (
                    <button
                      onClick={() => setVmcSpecTab(vmcSpecTab === "vmc" ? "axis" : "vmc")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full text-primary text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.03] active:scale-[0.98] self-start sm:self-auto"
                      title="Switch between KTM VMC and 4th Axis specifications"
                    >
                      <span>Show {vmcSpecTab === "vmc" ? "4th Axis" : "KTM VMC"}</span>
                      <ChevronRight size={14} className={`transform transition-transform duration-200 ${vmcSpecTab === "axis" ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                <div className="overflow-x-auto mt-6">
                  {selectedSpecsMachine === "vmc" && vmcSpecTab === "vmc" ? (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/80 text-foreground font-bold text-sm sm:text-base">
                          <th className="py-3 px-4">Description</th>
                          <th className="py-3 px-4">UOM</th>
                          <th className="py-3 px-4 text-right">BT-40</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 text-xs sm:text-sm">
                        {vmcSpecs.map((row, idx) => {
                          if (row.isHeader) {
                            return (
                              <tr key={idx} className="bg-primary/10 border-l-4 border-primary">
                                <td colSpan={3} className="py-3 px-4 font-bold text-foreground uppercase tracking-wider text-xs sm:text-sm">
                                  {row.desc}
                                </td>
                              </tr>
                            );
                          }
                          return (
                            <tr key={idx} className="hover:bg-primary/5 transition-colors">
                              <td className="py-2.5 px-4 font-medium text-foreground">{row.desc}</td>
                              <td className="py-2.5 px-4 text-muted-foreground">{row.unit}</td>
                              <td className="py-2.5 px-4 text-right font-semibold text-foreground">{row.value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/80 text-foreground font-bold text-sm sm:text-base">
                          <th className="py-3 px-4">
                            {selectedSpecsMachine === "vmc" && vmcSpecTab === "axis"
                              ? "Parameter / Dimension"
                              : "Description"}
                          </th>
                          <th className="py-3 px-4">Unit / UOM</th>
                          <th className="py-3 px-4 text-right">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 text-xs sm:text-sm">
                        {(selectedSpecsMachine === "vmc" 
                          ? axisSpecs 
                          : selectedSpecsMachine === "rig500" 
                          ? rig500Specs 
                          : rig1200Specs).map((row, idx) => {
                          if (row.isHeader) {
                            return (
                              <tr key={idx} className="bg-primary/10 border-l-4 border-primary">
                                <td colSpan={3} className="py-3 px-4 font-bold text-foreground uppercase tracking-wider text-xs sm:text-sm">
                                  {row.desc}
                                </td>
                              </tr>
                            );
                          }
                          return (
                            <tr key={idx} className="hover:bg-primary/5 transition-colors">
                              <td className="py-2.5 px-4 font-medium text-foreground">{row.desc}</td>
                              <td className="py-2.5 px-4 text-muted-foreground">{row.unit}</td>
                              <td className="py-2.5 px-4 text-right font-semibold text-foreground">{row.value}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoSection;
