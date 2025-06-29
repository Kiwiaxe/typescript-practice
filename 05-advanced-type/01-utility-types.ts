//task 1.1
interface IUserSettings {
	theme: string,
	notificationEnable?: boolean;
}

const partialSettings: Partial<IUserSettings> = {
	theme: 'Development'
}
const requiredSettings: Required<IUserSettings> = {
	theme: 'Development',
	notificationEnable: true,
}

// task 1.2
interface ITask {
	id: number,
	title: string,
	description?: string,
	dueData: Date,
	completed: boolean
}

type TaskSummary = Pick<ITask, 'id' | 'title'>;
type TaskCreationDTO = Omit<ITask, 'id' | 'completed'>;
type StatusCount = Record<string, number>;
