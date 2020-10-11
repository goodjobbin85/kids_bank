class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :value, :is_complete?, :student_id
end
