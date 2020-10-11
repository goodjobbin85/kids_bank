class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :balance, :allowance
  has_many :tasks
end
