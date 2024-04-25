import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, showOnlyIncomplete, setTaskStatus, removeTask, setShowOnlyIncomplete }) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter(task => !showOnlyIncomplete || task.status === 0)
          .map(task => (
             <TaskItem
               task={task} 
               setTaskStatus={setTaskStatus}
               removeTask= {removeTask}
               

             />
          ))}
      </ul>

      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-wrapper">
          Chỉ hiển thị công việc chưa hoàn thành
        </label>
        <input
          type="checkbox"
          id="filter"
          onChange={(e) => setShowOnlyIncomplete(e.target.checked)}
        />

        {/* Bổ sung phần thêm công việc mới */}
        <form className="form">
          <label htmlFor="newitem">Thêm vào danh sách công việc</label>
          <input
            type="text"
            id="newitem"
            // value={newTask} // Bạn cần tạo state newTask và handleInputChange để xử lý giá trị của input
            // onChange={handleInputChange}
          />
          {/* Bạn cũng cần tạo hàm handleSubmit để xử lý sự kiện onSubmit của form */}
          <button type="submit">Thêm Mục</button>
        </form>
      </div>
    </>
  );
}

export default TaskList;
