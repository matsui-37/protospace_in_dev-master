class CommentsController < ApplicationController
  def create
   @comment = Comment.create(comment_params)
   redirect_to prototype_path(@comment.prototype.id)
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(prototype_id: params[:prototype_id], captured_image_id: params[:captured_image_id], user_id: current_user.id)
  end
end
