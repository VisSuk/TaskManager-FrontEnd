export const getTaskCounts = (allTasks) => {
    
    const taskCounts = {
      "all":allTasks.length,
      "pending":allTasks.filter((item) =>  item.taskStatus == 'pending' ).length,
      "inprogress":allTasks.filter((item) =>  item.taskStatus == 'inprogress' ).length,
      "completed":allTasks.filter((item) =>  item.taskStatus == 'completed' ).length,
      "high": allTasks.filter((item) =>  item.priority == 'high' ).length,
      "medium": allTasks.filter((item) =>  item.priority == 'medium' ).length,
      "low": allTasks.filter((item) =>  item.priority == 'low' ).length,
    }
    return taskCounts

  }