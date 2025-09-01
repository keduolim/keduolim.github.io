// 技能数据配置文件
// 用于管理技能展示页面的数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 相关项目ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	// Frontend Skills专业技能
	{
		id: "javascript",
		name: "JavaScript",
		description: "现代JavaScript开发，包括ES6+语法、异步编程、模块化开发等。",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: ["mizuki-blog", "portfolio-website", "data-visualization-tool"],
		color: "#F7DF1E",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description: "基于Chrome V8引擎的JavaScript运行时，用于服务端开发。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description: "世界上最流行的开源关系型数据库管理系统，广泛用于Web应用。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description: "分布式版本控制系统，代码管理和团队协作必备工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "轻量级但功能强大的代码编辑器，丰富的插件生态。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	{
		id: "webstorm",
		name: "WebStorm",
		description: "JetBrains开发的专业JavaScript和Web开发IDE，智能代码辅助。",
		icon: "logos:webstorm",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["react-project", "vue-project"],
		color: "#00CDD7",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description: "JetBrains旗舰IDE，Java开发的首选工具，强大的智能编码辅助。",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["java-enterprise", "spring-boot-app"],
		color: "#000000",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description: "JetBrains专业Python IDE，提供智能代码分析和调试功能。",
		icon: "logos:pycharm",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["python-web-app", "data-analysis"],
		color: "#21D789",
	},

	// Other Skills
	{
		id: "graphql",
		name: "GraphQL",
		description: "API查询语言和运行时，提供更高效、强大和灵活的数据获取方式。",
		icon: "logos:graphql",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["modern-api"],
		color: "#E10098",
	},
];

// 获取技能统计信息
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按分类获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// 获取高级技能
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// 计算总经验年数
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
