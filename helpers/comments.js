module.exports = {
    newest: function () {
        var comments = [
            {
                image_id: 1,
                email:'test@testing.com',
                name:  'Test Tester',
                gravatar: 'http://lorempixel.com/75/75/animals/1',
                comment:  'This is a test comment...',
                timestamp: Date.now(),
                image: {
                    uniqueId: 1,
                    title: 'Sample Image 1',
                    description: '',
                    filename: 'sample1.jpg',
                    views: 0,
                    likes: 0,
                    timestamp: Date.now
                }
            },
            {
                image_id: 2,
                email:'test@testing.com',
                name:  'Test Tester',
                gravatar: 'http://lorempixel.com/75/75/animals/2',
                comment:  'Another followup comment!',
                timestamp: Date.now(),
                image: {
                    uniqueId: 2,
                    title: 'Sample Image 2',
                    description: '',
                    filename: 'sample2.jpg',
                    views: 0,
                    likes: 0,
                    timestamp: Date.now
                }
            },
            {
                image_id: 3,
                email:'test@testing.com',
                name:  'Test Tester',
                gravatar: 'http://lorempixel.com/75/75/animals/3',
                comment:  'Another followup comment!',
                timestamp: Date.now(),
                image: {
                    uniqueId: 3,
                    title: 'Sample Image 3',
                    description: '',
                    filename: 'sample3.jpg',
                    views: 0,
                    likes: 0,
                    timestamp: Date.now
                }
            },
            {
                image_id: 4,
                email:'test@testing.com',
                name:  'Test Tester',
                gravatar: 'http://lorempixel.com/75/75/animals/4',
                comment:  'Another followup comment!',
                timestamp: Date.now(),
                image: {
                    uniqueId: 4,
                    title: 'Sample Image 4',
                    description: '',
                    filename: 'sample4.jpg',
                    views: 0,
                    likes: 0,
                    timestamp: Date.now
                }
            }
        ];
    }
};