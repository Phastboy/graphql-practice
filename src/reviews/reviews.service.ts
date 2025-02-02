import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';

@Injectable()
export class ReviewsService {
    create(createReviewInput: CreateReviewInput) {
        return `This action adds a new review with input: ${JSON.stringify(createReviewInput)}`;
    }

    findAll() {
        return `This action returns all reviews`;
    }

    findOne(id: number) {
        return `This action returns a #${id} review`;
    }

    update(id: number, updateReviewInput: UpdateReviewInput) {
        return `This action updates a #${id} review ${JSON.stringify(updateReviewInput)}`;
    }

    remove(id: number) {
        return `This action removes a #${id} review`;
    }
}
