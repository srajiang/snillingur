class Api::AnnotationsController < ApplicationController
  
  def index
    @annotations = Song.find_by(id: params[:songId]).annotations
    render :index
  end
  
  def show
    @annotation = Annotation.find_by(id: params[:id])
  end

  def create
    @annotation = Annotation.new(annotation_params)

    if @annotation.save
      render :show
    else
      render @annotation.errors.full_messages, status: 422
    end

  end

  def update


    @annotation = Annotation.find_by(id: params[:id])

    if !@annotation.nil?

      p @annotation
      p annotation_params

      if @annotation.update_attributes(annotation_params)
        render :show
      else
        render json: @annotation.errors.full_messages, status: 422
      end

    else 
      render json: ["Annotation not found"], status: 422
    end 

  end

  def destroy
    @annotation = Annotation.find_by(id: params[:id])
    if !@annotation.nil?
      @annotation.destroy
    end

    render json: ["null"]
  end


  def annotation_params
    params.require(:annotation).permit(:body, :referent_id, :annotator_id, :id)
  end

end
