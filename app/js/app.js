(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('readingList', [])
        .controller('ReadingListController', function () {
           this.genres = genres;
           this.books = books;
        })
        .directive('bookGenres', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/book-genres.html',
                scope: {
                    genres: '='
                }
            }
        });

    var genres = ['folklore', 'fantasy', 'fiction',
                  'non-fiction', 'thriller', 'romance',
                  'horror', 'humor', 'legend',
                  'mystery', 'mythology', 'poetry'];
    var books = [
        {
            title: 'The Last Wish: Introducing The Witcher',
            author: 'Andrzej Sapkowski',
            isbn: '0316029181',
            review: '"Like a complicated magic spell, a Sapkowski novel is a hodgepodge of fantasy, intellectual discourse, and dry humor. Recommended."―Time',
            rating: 4,
            genres: {
                'fantasy': true,
                'fiction': true,
                'folklore': true
            }
        },
        {
            title: 'Mageborn: The Blacksmith\'s Son',
            author: 'Michael G. Manning',
            isbn: '1463684347',
            review: '"You\'ve GOT to read this!"―Mom',
            rating: 4,
            genres: {
                'fantasy': true,
                'fiction': true
            }
        },
        {
            title: 'The Alchemyst: The Secretes of the Immortal Nicholas Flamel',
            author: 'Michael Scott',
            isbn: '0385736002',
            review: '"Entertaining and engaging for all ages!"―E. Walker',
            rating: 5,
            genres: {
                'fantasy': true,
                'fiction': true
            }
        }
    ];
})();


