class CommentsController < ApplicationController
  def create
   @comment = Comment.create(text: comment_params[:text], prototype_id: comment_params[:tweet_id], captured_images_id: comment_params[:captured_images_id], user_id: current_user.id)
   redirect_to "/prototypes/#{@comment.prototype.id}"
  end

  private
  def comment_params
    params.permit(:text, :prototype_id, :captured_images_id)
  end
end
