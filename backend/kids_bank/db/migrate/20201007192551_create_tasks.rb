class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.integer :student_id
      t.decimal :value
      t.boolean :is_complete?

      t.timestamps
    end
  end
end
