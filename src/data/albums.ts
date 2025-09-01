// 相册配置数据结构
export interface Photo {
	id: string;
	src: string;
	thumbnail?: string;
	alt: string;
	title?: string;
	description?: string;
	tags?: string[];
	date?: string;
	location?: string;
	width?: number;
	height?: number;
	camera?: string;
	lens?: string;
	settings?: {
		aperture?: string;
		shutter?: string;
		iso?: string;
		focal?: string;
	};
}

export interface AlbumGroup {
	id: string;
	title: string;
	description?: string;
	cover: string;
	date: string;
	location?: string;
	tags?: string[];
	photos: Photo[];
	layout?: "grid" | "masonry";
	columns?: number;
}

// 相册数据
export const albumsData: AlbumGroup[] = [
	// {
	// 	id: "k-on-collection",
	// 	title: "轻音少女 K-ON!",
	// 	description: "可爱的轻音部女孩们的日常时光，青春与音乐的美好回忆",
	// 	cover: "https://wallpapercave.com/wp/wp2535789.jpg",
	// 	date: "2024-06-10",
	// 	location: "樱丘高校",
	// 	tags: ["K-ON", "轻音少女", "萌系", "日常"],
	// 	layout: "grid",
	// 	columns: 3,
	// 	photos: [
	// 		{
	// 			id: "yui-hirasawa-1",
	// 			src: "https://wallpapercave.com/wp/wp2535789.jpg",
	// 			alt: "平泽唯 - 可爱的吉他手",
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 		{
	// 			id: "mio-akiyama-1",
	// 			src: "https://wallpapercave.com/wp/wp2535790.jpg",
	// 			alt: "秋山澪 - 害羞的贝斯手",
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 		{
	// 			id: "ritsu-tainaka-1",
	// 			src: "https://wallpapercave.com/wp/wp2535791.jpg",
	// 			alt: "田井中律 - 活泼的鼓手",
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 		{
	// 			id: "tsumugi-kotobuki-1",
	// 			src: "https://wallpapercave.com/wp/wp2535792.jpg",
	// 			alt: "琴吹紬 - 温柔的键盘手",
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 		{
	// 			id: "azusa-nakano-1",
	// 			src: "https://wallpapercave.com/wp/wp2535793.jpg",
	// 			alt: "中野梓 - 认真的后辈",
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 		{
	// 			id: "k-on-group-1",
	// 			src: "https://wallpapercave.com/wp/wp2535794.jpg",
	// 			alt: "轻音部全员合照",
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 	],
	// },
];
