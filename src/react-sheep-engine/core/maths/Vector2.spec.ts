import {Vector2} from "./Vector2";

describe("Vector2", () => {
    it("should assign the x and y values on creation", () => {
        // Arrange, Act
        const sut = Vector2.one;

        expect(sut.x).toBe(1);
        expect(sut.y).toBe(1);
    });

    describe("when summing vectors", () => {
        it("should result in the summation of two vectors", () => {
            // Arrange
            const a = Vector2.one;
            const b = Vector2.one;

            // Act
            const result = Vector2.add(a, b);

            // Assert
            expect(result.x).toBe(2);
            expect(result.y).toBe(2);
        });

        it("should add one vector onto another", () => {
            // Arrange
            const sut = Vector2.one;
            const b = Vector2.one;

            // Act
            sut.add(b);

            // Assert
            expect(sut.x).toBe(2);
            expect(sut.y).toBe(2);
            expect(b.x).toBe(1);
            expect(b.y).toBe(1);
        });

        it("should be able to string multiple additions", () => {
            // Arrange
            const sut = Vector2.one;

            // Act
            sut.add(Vector2.one).add(Vector2.one);

            // Assert
            expect(sut.x).toBe(3);
            expect(sut.y).toBe(3);
        });
    });

    describe("when subtracting vectors", () => {
        it("should result in the difference of two vectors", () => {
            // Arrange
            const a = Vector2.one;
            const b = Vector2.one;

            // Act
            const result = Vector2.subtract(a, b);

            // Assert
            expect(result).toEqual(Vector2.zero);
        });

        it("should subtract one vector onto another", () => {
            // Arrange
            const sut = Vector2.one;
            const b = Vector2.one;

            // Act
            sut.subtract(b);

            // Assert
            expect(sut).toEqual(Vector2.zero);
            expect(b).toEqual(Vector2.one);
        });

        it("should be able to string multiple subtractions", () => {
            // Arrange
            const sut = new Vector2(2, 2);

            // Act
            sut.subtract(Vector2.one).subtract(Vector2.one);

            // Assert
            expect(sut).toEqual(Vector2.zero);
        });
    });

    describe("when multiplying a vector with a scalar", () => {
        it("should result a scaled vector", () => {
            // Arrange
            const scalar = 5;
            const sut = Vector2.one;

            // Act
            const result = Vector2.multiply(sut, scalar);

            // Assert
            expect(result).toEqual(new Vector2(scalar, scalar));
        });

        it("should scale the vector", () => {
            // Arrange
            const scalar = 5;
            const sut = Vector2.one;

            // Act
            sut.multiply(scalar);

            // Assert
            expect(sut).toEqual(new Vector2(scalar, scalar));
        });

        it("should be able to string multiple scalars", () => {
            // Arrange
            const scalar = 2;
            const sut = Vector2.one;

            // Act
            sut.multiply(scalar).multiply(scalar);

            // Assert
            expect(sut).toEqual(new Vector2(4, 4));
        });
    });
});