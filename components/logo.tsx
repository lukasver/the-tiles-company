"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import TheTilesCompanyLogo from "@/public/assets/wt.webp";
import TheTilesCompanyIsologo from "@/public/assets/mjs-min.webp";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { blurHeight: _, blurWidth: __, ...restLogo } = TheTilesCompanyLogo;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { blurHeight: ___, blurWidth: ____, ...restIsologo } = TheTilesCompanyIsologo;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.9, y: -10 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: 'spring' as const,
			stiffness: 100,
			damping: 12,
			mass: 1,
		},
	},
};

export const Logo = ({ className }: { className?: string }) => {
	return (
		<motion.figure
			className={cn('flex items-center gap-2', className, "dark:bg-none")}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={imageVariants}>
				<Image
					alt="The Tiles Company Logo"
					{...restIsologo}
					height={34}
					width={34}
					className='block'
					priority
				/>
			</motion.div>
			<motion.div variants={imageVariants}>
				<Image
					alt="The Tiles Company Logo"
					{...restLogo}
					className='hidden sm:block'
					height={80}
					width={100}
					priority
				/>
			</motion.div>
		</motion.figure>
	);
};
